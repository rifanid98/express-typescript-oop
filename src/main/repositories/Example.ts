// import Models from "../models";
class ExampleRepository {

  private table = "";

  constructor(table: string) {
    this.table = table;
  }

  /**
   * Example Get Custom Data
   * @returns MySQL rows
   */
  async exampleGetData(): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        const get = {
          example1: "value1",
          example2: "value2"
        };
        resolve(get);
      } catch (error) {
        reject(error);
      }
    });
  }

  /**
   * Example Post Custom Data
   * @returns MySQL rows
   */
  async examplePostData(data: object): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        setTimeout(() => {
          resolve(data);
        }, 1000);
      } catch (error) {
        reject(error);
      }
    });
  }

  /**
   * Example Update Custom Data
   * @returns MySQL rows
   */
  async exampleUpdateData(data: object, id: number): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        if (id != 1) {
          resolve(false);
        }
        resolve(data);
      } catch (error) {
        reject(error);
      }
    });
  }
  
  /**
   * Example Delete Custom Data
   * @returns MySQL rows
   */
  async exampleDeleteData(id: number): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        if (id != 1) {
          resolve(false);
        }
        resolve(true);
      } catch (error) {
        reject(error);
      }
    });
  }

}

export default new ExampleRepository("Examples");