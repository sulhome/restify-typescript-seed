import chai = require('chai');
import { api as server } from '../../../app/app';
import * as supertest from 'supertest';
import {logger} from '../../../app/services/logger';
import * as sinon from 'sinon';


describe('sample route controller', () => {

    let expect = chai.expect;
    let sandbox = sinon.sandbox.create();
    let logInfoStub: Sinon.SinonStub;

    beforeEach(() => {
        logInfoStub = sandbox.stub(logger, 'info');
    });

    afterEach(() => {
        sandbox.restore();
    });

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
                    expect(logInfoStub.callCount).to.equal(1);
                    done();
                }
            });
    });
});