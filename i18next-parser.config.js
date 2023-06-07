module.exports = {
    createOldCatalogs: false,
    defaultNamespace: 'common',
    indentation: 4,
    keepRemoved: false,
    useKeysAsDefaultValue: (locale) => locale === 'en',
    lexers: {
        jsx: [
            {
                lexer: 'JsxLexer',
                attr: 'i18nKey', // Attribute for the keys
            },
        ],
    },
    lineEnding: 'lf',
    locales: ['cz', 'ru', 'en'],
    output: 'public/locales/$LOCALE/$NAMESPACE.json',
    namespaceSeparator: false,
    keySeparator: false,
    input: [
        './src/**/*.{ts,tsx}',
    ],
    sort: true,
    verbose: false,
};
