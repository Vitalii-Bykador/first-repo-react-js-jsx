module.exports = {
    // "extends": "airbnb",
    "plugins": ["react"],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    rules: {
        quotes: ["error", "double"],// Использовать двойные кавычки.
        semi: ["error", "always"],  // Всегда добавлять точку с запятой в конце утверждения.
        indent: ["error", 4],       // Отступ — это четыре пробела.
        // "no-console": "error"       // Избегать использования в коде методов на консоли (`console`).
    }
};
