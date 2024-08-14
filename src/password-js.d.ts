declare module 'password.js' {
    interface GenerateOptions {
        length: number;
        specials?: number;
        nums?: number;
        uppers?: number;
        lowers?: number;
    }

    function generate(options: GenerateOptions): string;
    function score(password: string): number;
    function rank(password: string): string;

    export { generate, score, rank, GenerateOptions };
}
