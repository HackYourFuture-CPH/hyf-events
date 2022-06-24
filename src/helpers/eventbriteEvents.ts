export type EventbriteEventData = {
  name: {
    text: string;
    html: string;
  };
  description: {
    text: string;
    html: string;
  };
  url: string;
  start: {
    timezone: string;
    local: string;
    utc: string;
  };
  end: {
    timezone: string;
    local: string;
    utc: string;
  };
  organization_id: string;
  created: string;
  changed: string;
  published: string;
  capacity: number;
  capacity_is_custom: boolean;
  status: string;
  currency: string;
  listed: boolean;
  shareable: boolean;
  invite_only: boolean;
  online_event: boolean;
  show_remaining: boolean;
  tx_time_limit: number;
  hide_start_date: boolean;
  hide_end_date: boolean;
  locale: string;
  is_locked: boolean;
  privacy_setting: string;
  is_series: boolean;
  is_series_parent: boolean;
  inventory_type: string;
  is_reserved_seating: boolean;
  show_pick_a_seat: boolean;
  show_seatmap_thumbnail: boolean;
  show_colors_in_seatmap_thumbnail: boolean;
  source: string;
  is_free: boolean;
  version: null;
  summary: string;
  facebook_event_id: string | null;
  logo_id: string;
  organizer_id: string;
  venue_id: string;
  category_id: string;
  subcategory_id: string;
  format_id: string;
  id: string;
  resource_uri: string;
  is_externally_ticketed: boolean;
  logo: {
    crop_mask: {
      top_left: {
        x: number;
        y: number;
      };
      width: number;
      height: number;
    };
    original: {
      url: string;
      width: number;
      height: number;
    };
    id: string;
    url: string;
    aspect_ratio: string;
    edge_color: string | null;
    edge_color_set: boolean;
  };
  ticket_classes: [
    {
      actual_cost: null;
      actual_fee: null;
      cost: null;
      fee: null;
      tax: null;
      resource_uri: string;
      display_name: string;
      name: string;
      description: string | null;
      sorting: number;
      donation: boolean;
      free: boolean;
      minimum_quantity: number;
      maximum_quantity: number;
      maximum_quantity_per_order: number;
      on_sale_status: string;
      has_pdf_ticket: boolean;
      order_confirmation_message: string | null;
      delivery_methods: string[];
      category: string;
      sales_channels: string[];
      secondary_assignment_enabled: boolean;
      event_id: string;
      image_id: string | null;
      id: string;
      capacity: number;
      quantity_total: number;
      quantity_sold: number;
      sales_start: string;
      sales_end: string;
      sales_end_relative: string | null;
      hidden: boolean;
      hidden_currently: boolean;
      include_fee: boolean;
      split_fee: boolean;
      hide_description: boolean;
      hide_sale_dates: boolean;
      auto_hide: boolean;
      payment_constraints: string[];
    }
  ];
};

export type EventsData = {
  data: EventbriteEventData[];
};
