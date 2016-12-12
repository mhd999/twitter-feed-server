import app from '../app';
import request from 'supertest';
import { expect } from 'chai';

const agent = request.agent(app);

describe('Dashboard feed tests', () => {
    it('should return all tweets stored in the redis DB', done => {
		agent.get('/api/v1/dashboard')
			.expect(200, done);
	})
})