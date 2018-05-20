declare module "getenv" {
    declare export function getenv = {
        $call: (name: string, fallback?: string) => string;
        string: (name: string, fallback?: string ) => string;
        int: (name: string, fallback?: number) => number;
        float: (name: string, fallback?: number) => number;
        bool: (name: string, fallback?: boolean) => boolean;
        boolish: (name: string, fallback?: boolean) => boolean;
        url: (name: string, fallback?: URL) => URL;
        disableFallbacks: () => void;
        enableFallbacks: () => void;
        disableErrors: () => void;
        enableErrors: () => void;
    }
}