import { gql } from '@apollo/client'
import type { DocumentNode } from '@apollo/client'

export const GET_STORE_CONFIG: DocumentNode = gql`
  query getStoreConfig {
    storeConfig {
      code: store_code
      category_url: category_url_suffix
      cms_home: cms_home_page
      copyright
      sort_by: catalog_default_sort_by
      list_page: list_per_page
      list_values: list_per_page_values
      locale
      logo_alt
      shortcut_icon: head_shortcut_icon
      product_url: product_url_suffix
      logo_src: header_logo_src
      base_url: secure_base_url
      media_url: secure_base_media_url
    }
    currency {
      code: base_currency_code
      symbol: base_currency_symbol
    }
  }
`
