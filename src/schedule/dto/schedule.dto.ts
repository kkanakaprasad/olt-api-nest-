import { IsDefined } from "class-validator";
import { ISlots, ISubjects } from "src/tutorProfile/tutorProfile.schema";

export class ScheduleDto {
   
    @IsDefined()
    studentId : string;
   
    @IsDefined()
    tutorId: string;

    @IsDefined()
    subjects : ISubjects[]
   
    @IsDefined()
    start : ISlots[];
   
    @IsDefined()
    end : ISlots[];
}