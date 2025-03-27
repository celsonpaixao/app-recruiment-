const useAppValidator = () => {
    const regexPatterns = {
        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/,
        phone: /^\+?[1-9]\d{1,14}$/, 
        username: /^[a-zA-Z0-9_]{3,16}$/,
        onlyNumbers: /^\d+$/,
        onlyLetters: /^[A-Za-zÀ-ÖØ-öø-ÿ]+$/,
        alphanumeric: /^[a-zA-Z0-9]+$/,
    };

    const validate = (type: keyof typeof regexPatterns, value: string) => {
        return regexPatterns[type].test(value);
    };

    return { validate };
};

export default useAppValidator;
