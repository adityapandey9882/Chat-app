import axios from "axios"
import { Host } from "@/utils/constants"

export const apiClient = axios.create({
    baseURL: Host,
});

