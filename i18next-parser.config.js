module.exports = {
    createOldCatalogs: false,
    defaultNamespace: 'common',
    indentation: 4,
    keepRemoved: false,
    defaultValue: function (locale, namespace, key, value) {
        return key;
    },
    lexers: {
        jsx: [
            {
                lexer: 'JsxLexer',
                attr: 'i18nKey', // Attribute for the keys
            },
        ],
    },
    lineEnding: 'lf',
    locales: ['cs', 'ru', 'en', 'uk'],
    output: 'public/locales/$LOCALE/$NAMESPACE.json',
    namespaceSeparator: false,
    keySeparator: false,
    input: [
        './src/**/*.{ts,tsx}',
    ],
    sort: true,
    verbose: false,
};
