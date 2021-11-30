export interface Appointment {
    _id : string;
    client_username: string;
    doctor_username:string;
    end_date: string;
    purpose: string;
    start_date: string;
    year: number;
    documents: any[];
  }
