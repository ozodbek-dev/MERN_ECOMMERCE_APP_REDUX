class ApiFeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  //searching
  search() {
    const keyword = this.queryStr.keyword
      ? {
          name: {
            $regex: this.queryStr.keyword,
            $options: "i",
          },
        }
      : {};

    this.query = this.query.find({ ...keyword });

    return this;
  }

  filter() {
    const queryCopy = { ...this.queryStr };
    //Removing some Fields for category;
    const removeFidelds = ["keyword", "page", "limit"];

    console.log(queryCopy);


    removeFidelds.forEach((key) => delete queryCopy[key]);
    

    console.log(queryCopy);
    
    let queryStr = JSON.stringify(queryCopy);
    //adding $ symbol for price filter

    queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`);


    this.query = this.query.find(JSON.parse(queryStr));


    return this;
  }

  paginate(resultPerPage) {

    const currentPage = Number(this.queryStr.page) || 1;

    const starFrom = resultPerPage * (currentPage - 1); //skipping next page index

  this.query = this.query.limit(resultPerPage).skip(starFrom);
  
    return this;
  }
}

module.exports = ApiFeatures;
