// Pichr api response structure for all responses
export interface ApiResponseStructure {
    success: string;
    code: number;
    locale: string;
    message: string;
    data?: JSON;
}
