import { Error404Module } from './error404.module';

describe('Error404Module', () => {
  let error404Module: Error404Module;

  beforeEach(() => {
    error404Module = new Error404Module();
  });

  it('should create an instance', () => {
    expect(error404Module).toBeTruthy();
  });
});
