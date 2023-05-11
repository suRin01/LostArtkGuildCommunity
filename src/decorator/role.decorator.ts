import { ExecutionContext, SetMetadata, UseGuards, applyDecorators } from "@nestjs/common";
import { AccessJwtAuthGuard } from "src/api/auth/auth.guard";

export function hasRole(...roles:string[]) {
    console.log("has role annotaion");
    console.log(roles);
    return applyDecorators(
        SetMetadata('roles', roles),
        UseGuards(AccessJwtAuthGuard)

    )
}