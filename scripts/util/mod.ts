import { Result } from "./interfaces.ts";
export const fixTitle = (str: string) => {
  return str
    .replaceAll(":", "")
    // replace umlauts
    .replaceAll("ä", "a")
    .replaceAll("ö", "o")
    .replaceAll("ü", "u")
    .replaceAll("Ä", "A")
    .replaceAll("Ö", "O")
    .replaceAll("Ü", "U")
    .replaceAll("ß", "ss")
    // replace special characters
    .split(/[\s_-]/)
    .map((s) => s[0].toUpperCase() + s.slice(1).toLowerCase())
    .join("")
    .replace("OpenDataRdw", "")
    .replace("OpenData", "")
    // Replace Gekentende
    .replace("Gekentekende", "Kenteken");
};

export const pascalCase = (str: string) => {
  const s = str
    .split(/[\s_-]/)
    .map((s) => s ? s[0].toUpperCase() + s.slice(1).toLowerCase() : "")
    .join("");
  if (s[0].match(/\d/)) {
    return `N${s}`;
  }

  return s;
};

export const cleanString = (str?: string) => {
  const cleanRegex = /[^\x20-\x7E\u200B-\u200D\uFEFF\uBBBF]/g;
  const cleanAndTrim = (s: string) => s.replace(cleanRegex, "").trim();
  const splitted = (str || "").split("\n");
  if (splitted.length === 0) {
    return "";
  } else if (splitted.length === 1) {
    return cleanAndTrim(splitted[0]);
  }
  return splitted.map(cleanAndTrim).filter((s) => s.length > 0).join("\n");
};

export const mapColumns = (res: Result): Array<{
  name: string;
  description: string[];
  datatype: string;
  datatypeTemplate: string;
  field_name: string;
  node_type: string;
  big_name: string;
}> => {
  const {
    columns_name,
    columns_description,
    columns_datatype,
    columns_field_name,
  } = res.resource;

  // Check if column lengths are equal
  [
    columns_name.length,
    columns_description.length,
    columns_datatype.length,
    columns_field_name.length,
  ].forEach((length, _i, arr) => {
    if (length !== arr[0]) {
      throw new Error(
        `Column lengths are not equal: ${columns_name.join(", ")}`,
      );
    }
  });

  const columns = columns_name.map((n, i) => {
    const name = cleanString(n);
    const description = cleanString(columns_description[i]).split("\n");
    const datatype = cleanString(columns_datatype[i]);
    const datatypeTemplate = dataTypeToDataTypeTemplate(datatype);
    const field_name = cleanString(columns_field_name[i]);
    const node_type = translateDatatype(datatype);
    const big_name = pascalCase(field_name);
    return { name, big_name, description, datatype, datatypeTemplate, field_name, node_type };
  }).sort((a, b) => a.field_name.localeCompare(b.field_name));
  return columns;
};

export const translateDatatype = (datatype: string) => {
  if (["Text", "Number", "Calendar date"].includes(datatype)) {
    return "string";
  }
  if (datatype === "Checkbox") {
    return "boolean";
  }
  if (datatype === "Point") {
    return "{ latitude: string; longitude: string; human_address: null | string; }";
  }
  console.log(`Unknown datatype: ${datatype}`);
  return "unknown";
};

const dataTypeStr = (type: string) => `DataType.${type}`;
const datatypeMap = new Map<string, string>([
  ["checkbox", dataTypeStr("Checkbox")],
  ["fixed timestamp", dataTypeStr("FixedTimestamp")],
  ["floating timestamp", dataTypeStr("FloatingTimestamp")],
  ["line", dataTypeStr("Line")],
  ["location", dataTypeStr("Location")],
  ["multiline", dataTypeStr("MultiLine")],
  ["multipoint", dataTypeStr("MultiPoint")],
  ["multipolygon", dataTypeStr("MultiPolygon")],
  ["number", dataTypeStr("Number")],
  ["point", dataTypeStr("Point")],
  ["polygon", dataTypeStr("Polygon")],
  ["text", dataTypeStr("Text")],
  ["url", dataTypeStr("URL")],
  ["calendar date", dataTypeStr("FloatingTimestamp")],
]);

export const dataTypeToDataTypeTemplate = (dataType: string) => {
  return datatypeMap.get(dataType.toLowerCase()) || dataTypeStr("_Unknown");
};
