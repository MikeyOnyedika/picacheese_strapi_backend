import type { Schema, Attribute } from '@strapi/strapi';

export interface ElementAlbum extends Schema.Component {
  collectionName: 'components_element_albums';
  info: {
    displayName: 'album';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    images: Attribute.Media;
  };
}

export interface SeoMetaData extends Schema.Component {
  collectionName: 'components_seo_meta_data';
  info: {
    displayName: 'MetaData';
  };
  attributes: {
    metaTitle: Attribute.String;
    metaDescription: Attribute.Text;
    metaImage: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'element.album': ElementAlbum;
      'seo.meta-data': SeoMetaData;
    }
  }
}
