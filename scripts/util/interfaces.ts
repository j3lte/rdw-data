// deno-lint-ignore-file no-explicit-any
export interface ResponseData {
  results: Array<Result>;
  resultSetSize: number;
  timings: {
    serviceMillis: number;
    searchMillis: number[];
  };
  warnings: any[];
}

export interface Result {
  resource: {
    name: string;
    id: string;
    parent_fxf: any[];
    description: string;
    attribution: string | null;
    attribution_link: string | null;
    contact_email: null;
    type: string;
    updatedAt: string;
    createdAt: string;
    metadata_updated_at: string;
    data_updated_at: string;
    page_views: {
      page_views_last_week: number;
      page_views_last_month: number;
      page_views_total: number;
      page_views_last_week_log: number;
      page_views_last_month_log: number;
      page_views_total_log: number;
    };
    columns_name: string[];
    columns_datatype: string[];
    columns_field_name: string[];
    columns_description: string[];
    columns_format: any[];
    download_count: number;
    provenance: string;
    lens_view_type: string;
    lens_display_type: string;
    blob_mime_type: any;
    hide_from_data_json: boolean;
    publication_date: string;
  };
  classification: {
    categories: string[];
    domain_category?: string;
  } & Record<string, any>;
  metadata: {
    domain: string;
  };
  permalink: string;
  link: string;
  owner?: Creator;
  creator?: Creator;
}

interface Creator {
  id?: string;
  display_name?: string;
  user_type?: string;
}

export interface DataResult {
  name: string;
  full_name: string;
  description: string[];
  metadata_updated_at: string;
  category: string;
  id: string;
  domain: string;
  link: string;
  permalink: string;
  owner: string;
  creator: string;
  columns: Array<{
    name: string;
    big_name: string;
    description: string[];
    datatype: string;
    datatypeTemplate: string;
    node_type: string;
    field_name: string;
  }>;
}

export type WithSodaVersion = DataResult & {
  sodaVersion: string;
};
