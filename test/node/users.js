'use strict';

const assert = require('assert');
const Circuit = require('../../circuit-node');
const helper = require('./helper');
const prep = require('../preparation');
Circuit.logger.setLevel(Circuit.Enums.LogLevel.Error);

let client;
let user;
let client2;
let user2;
describe('Users', () => {
    before(async () => {
        client = prep.client;
        user = client.loggedOnUser;
        client2 = prep.client2;
        user2 = client2.loggedOnUser;
    });

    it('function: getLoggedOnUser', async () => {
        const res = await client.getLoggedOnUser();
        assert(res && res.userId === user.userId);
    });

    it('function: getUserById [user2]', async () => {
        const res = await client.getUserById(user2.userId);
        assert(res && res.userId === user2.userId);
    });

    it('function: getUserById [user]', async () => {
        const res = await client.getUserById(user.userId);
        assert(res && res.userId === user.userId);
    });

    it('function: getUserByEmail', async () => {
        const res = await client.getUserByEmail(user2.emailAddress);
        assert(res && res.userId === user2.userId);
    });

    it('function: getUsersById', async () => {
        const res = await client.getUsersById([user.userId, user2.userId]);
        assert(res && res.every(u => u.userId === user.userId || u.userId === user2.userId));
    });

    it('function: getUsersByEmail', async () => {
        const res = await client.getUsersByEmail([user.emailAddress, user2.emailAddress]);
        assert(res && res.every(u => u.userId === user.userId || u.userId === user2.userId));
    });

    it('functions: [updateUser, getUserById], with event: userUpdated', async () => {
        const updatedUser = {
            userId: user.userId,
            firstName: `${Date.now()}a`,
            lastName: `${Date.now()}b`,
            phoneNumbers: [{
                phoneNumber: '+15615551234',
                type: 'WORK',
                isExternallyManaged: false
            }],
            emailAddresses: [{
                type: 'WORK',
                address: 'testemail@bot.com'
            },{
                type: 'OTHER',
                address: 'othertestemail@bot.com'
            }],
            jobTitle: `${Date.now()}x`,
            company: `${Date.now()}z`
        }
        const oldUser = {
            userId: user.userId,
            firstName: user.firstName,
            lastName: user.lastName,
            phoneNumbers: user.phoneNumbers,
            emailAddresses: user.emailAddresses,
            jobTitle: user.jobTitle || ' ',
            company: user.company || ' '
        }
        await Promise.all([
            client.updateUser(updatedUser),
            helper.expectEvents(client, [{
                type: 'userUpdated',
                predicate: evt => evt.user.userId === user.userId && evt.user.firstName === updatedUser.firstName && evt.user.lastName === updatedUser.lastName && evt.user.jobTitle === updatedUser.jobTitle && evt.user.company === updatedUser.company && updatedUser.emailAddresses.every(emailAddress => evt.user.emailAddresses.some(e => e.address === emailAddress.address)) && updatedUser.phoneNumbers.every(number => evt.user.phoneNumbers.some(p => p.phoneNumber === number.phoneNumber))
            }])
        ]);
        const res1 = await client.getUserById(user.userId);
        const result1 = res1 && res1.userId === user.userId && res1.firstName === updatedUser.firstName && res1.lastName === updatedUser.lastName && res1.jobTitle === updatedUser.jobTitle && res1.company === updatedUser.company && updatedUser.emailAddresses.every(emailAddress => res1.emailAddresses.some(e => e.address === emailAddress.address)) && updatedUser.phoneNumbers.every(number => res1.phoneNumbers.some(p => p.phoneNumber === number.phoneNumber));
        await Promise.all([
            client.updateUser(oldUser),
            helper.expectEvents(client, [{
                type: 'userUpdated',
                predicate: evt => evt.user.userId === user.userId && evt.user.firstName === oldUser.firstName && evt.user.lastName === oldUser.lastName && evt.user.jobTitle === oldUser.jobTitle && evt.user.company === oldUser.company && oldUser.emailAddresses.every(emailAddress => evt.user.emailAddresses.some(e => e.address === emailAddress.address)) && oldUser.phoneNumbers.every(number => evt.user.phoneNumbers.some(p => p.phoneNumber === number.phoneNumber))
            }])
        ]);
        const res2 = await client.getUserById(user.userId);
        const result2 = res2 && res2.userId === user.userId && res2.firstName === oldUser.firstName && res2.lastName === oldUser.lastName && res2.jobTitle === oldUser.jobTitle && res2.company === oldUser.company && updatedUser.emailAddresses.every(emailAddress => res2.emailAddresses.some(e => e.address === emailAddress.address)) && oldUser.phoneNumbers.every(number => res2.phoneNumbers.some(p => p.phoneNumber === number.phoneNumber));
        assert(result1 && result2);
    });
});