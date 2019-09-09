module.exports = function(migration) {
  // Create Author content type
  const author = migration
    .createContentType('author')
    .name('Author')
    .displayField('name')

  author
    .createField('name')
    .name('Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false)

  author.createField('favouritePost', {
    name: 'Favourite Post',
    type: 'Link',
    linkType: 'Entry',
    localized: false,
    required: true,
    validations: [{ linkContentType: ['blogPost'] }],
    disabled: false,
    omitted: false,
  })

  author.changeFieldControl('name', 'singleLine', 'builtin', {})
  author.changeFieldControl('favouritePost', 'entryLinkEditor', 'builtin', {})
}
