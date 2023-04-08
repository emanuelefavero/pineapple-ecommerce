export default {
  name: 'heroBanner',
  title: 'Hero Banner',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{type: 'image'}],
      options: {
        // hotspot is a boolean that allows you to focus on a certain part of the image when cropping
        hotspot: true,
      },
    },
    {
      name: 'productName',
      title: 'Product Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug', // Sanity has a slug type that generates a slug based on the value of another field
      options: {
        source: 'productName', // The field to base the slug on
        maxLength: 96,
      },
    },
    {
      name: 'heroText',
      title: 'Hero Text',
      type: 'string',
    },
    {
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'originalPrice',
      title: 'Original Price',
      type: 'number',
    },
    {
      name: 'discounted',
      title: 'Is the product discounted?',
      type: 'boolean',
    },
    {
      name: 'discountPrice',
      title: 'Sale Price',
      type: 'number',
    },
    {
      name: 'discountPercentage',
      title: 'Sale Percentage',
      type: 'number',
    },
    {
      name: 'discountTime',
      title: 'Sale Time',
      type: 'string',
    },
  ],
}
