import { ApiProperty } from "@nestjs/swagger";
import { IsDefined } from "class-validator";

export class Payment {
    @IsDefined()
    @ApiProperty({
        type: [String]
    })
    scheduleIds: [string];

    @IsDefined()
    @ApiProperty({
        type: String
    })
    paymentId: string;

    @IsDefined()
    @ApiProperty({
        type: String
    })
    status: string;

    @IsDefined()
    @ApiProperty({
        type: Object
    })
    paymentInfo: Object;
}