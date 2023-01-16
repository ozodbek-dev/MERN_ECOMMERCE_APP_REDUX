class ApiFeatures {
  constructor(query, queryStr,count) {
    this.query = query;
    this.queryStr = queryStr;
    this.count = count
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



    removeFidelds.forEach((key) => delete queryCopy[key]);
    
    
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
  this.count = this.query;
  
    return this;
  }
}

module.exports = ApiFeatures;
