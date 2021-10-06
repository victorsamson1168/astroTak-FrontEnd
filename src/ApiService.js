import { message } from "antd";
import axios from "axios";

const apiService = axios.create({
  baseURL: "http://localhost:3939"
});

const apiHolder = {};

apiHolder.getBanner = async () => {
    try {
        const response = await apiService.get("/banner");
            return response;
        
    } catch (error) {
        console.log(error);
        
    }
};

apiHolder.getAstro = async () => {
    try {
        const response = await apiService.get("/astrologer");
            return response;
        
    } catch (error) {
        console.log(error);
        
    }
};

apiHolder.getReports = async () => {
    try {
        const response = await apiService.get("/reports");
            return response;
        
    } catch (error) {
        console.log(error);
        
    }
};

apiHolder.getQuestions = async () => {
    try {
        const response = await apiService.get("/questions");
            return response;
        
    } catch (error) {
        console.log(error);
        
    }
};
apiHolder.getHoroscope = async () => {
    try {
        const response = await apiService.get("/horoscope");
            return response;
        
    } catch (error) {
        message.error("internet required")
        console.log(error);
        
    }
};

apiHolder.getTestimonial = async () => {
    try {
        const response = await apiService.get("/testimonials");
            return response;
        
    } catch (error) {
        console.log(error);
        
    }
};
export {apiHolder};