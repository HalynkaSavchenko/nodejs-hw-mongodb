import { FIFTEEN_MINUTES, THIRTY_DAYS } from '../constants/index.js';
import {SessionsCollection} from '../db/models/session.js';
import { randomBytes } from 'node:crypto';

export const findSession = filter => SessionsCollection.findOne(filter);

export const createSession = async(userId) => {
    await SessionsCollection.deleteOne({userId});

    const accessToken = randomBytes(30).toString('base64');
    const refreshToken = randomBytes(30).toString('base64');

    const accessTokenValidUntil = new Date(Date.now() + FIFTEEN_MINUTES);
    const refreshTokenValidUntil = new Date(Date.now() + THIRTY_DAYS);

    return SessionsCollection.create({
        userId,
        accessToken,
        refreshToken,
        accessTokenValidUntil,
        refreshTokenValidUntil,
    });
};

export const deleteSession = filter => SessionsCollection.deleteOne(filter);
