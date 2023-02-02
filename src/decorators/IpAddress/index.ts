import { createParamDecorator } from '@nestjs/common';

import * as requestIp from 'request-ip';

export const IpAddress = createParamDecorator((data, req) => {
	if (req.clientIp)
    console.log('111')
		return req.clientIp;
	return requestIp.getClientIp(req); // In case we forgot to include requestIp.mw() in main.ts
});