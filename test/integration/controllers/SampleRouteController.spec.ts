import chai = require('chai');
import { api as server } from '../../../app/app';
import * as supertest from 'supertest';

let expect = chai.expect;

describe('sample route controller', () => {

    it('should return pong', (done) => {
        supertest(server)
            .get('/api/ping')
            .end((err: any, response: supertest.Response) => {
                if (err) {
                    done(err);
                }
                else {
                    expect(response.status).to.equal(200);
                    expect(response.body).to.equal('pong');
                    done();
                }
            });
    });
});