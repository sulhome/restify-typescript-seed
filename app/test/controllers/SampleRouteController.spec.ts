import chai = require('chai');
import restify = require('restify');
import sinon = require('sinon');
import SampleRouteController from '../../controllers/SampleRouteController';
var http = require('http');

var ctrl = new SampleRouteController();
var expect = chai.expect;
var sandbox = sinon.sandbox.create();

describe('sample route controller', () => {
    
    beforeEach(() => {
        sandbox = sinon.sandbox.create();    
    });

    afterEach(() => {
        sandbox.restore();        
    });
    
    it('should return pong', (done) => {
        var req: restify.Request;
        var res: restify.Response = <restify.Response>{ json: (status: any, body: any) => { } }; 
        var spy = sandbox.spy(res, "json");     
        ctrl.get(req, res, function() {          
            expect(spy.calledWith(200,"pong")).to.be.true;
            done();
      });
    });      
});