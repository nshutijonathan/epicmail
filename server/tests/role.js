process.env.NODE_ENV = 'test';

// Validator
import Validate from "../helpers/validation";


//Require the dev-dependencies
import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import server from "../server";

//load users
import Role from '../helpers/role'

const should = chai.should();
chai.use(chaiHttp);


// Role
describe("Role", () => {
   const role = {
      admin : 'admin',
      user : 'user'
   }
   // Test is a user is admin  
   describe("Admin", () => {
      it("Role should return admin", (done) => {
      let userRole = Role.admin(role.admin);
      userRole.should.equal(true);
      done()
      });
    });   
   // Test is a user is admin  
   describe("User", () => {
      it("Role should return user", (done) => {
      let userRole = Role.user(role.user);
      userRole.should.equal(true);
      done()
      });
    });   
});