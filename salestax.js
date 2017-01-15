function salesTaxReport(companySalesData, salesTaxRates) {
//whole rest of functions are contained here
  function calculateSalesTax(salesData, taxRates) {
    //part of the end object
    var workObj = new Object();
    for (var company of companySalesData) {
      var final = 0;
      //loop through and get the sales amount * the province
      for (var i = 0; i < company.sales.length; i++) {
        final += (company.sales[i] * salesTaxRates[company.province]);
      }
      //this if statement fixes Telus
      if (!workObj.hasOwnProperty(company.name)) {
        workObj[company.name] = final;
      }
      else {
        workObj[company.name] += final;
      }
    }
    return workObj;
  }

  function calculateSales(companySalesData) {
    //another object
    var salesObj = new Object();
    for (var company of companySalesData) {
      var final = 0;
      //add the sales together
      for (var i = 0; i < company.sales.length; i++) {
        final += (company.sales[i]);
      }
      //fixes Telus again
      if (!salesObj.hasOwnProperty(company.name)) {
        salesObj[company.name] = final;
      }
      else {
        salesObj[company.name] += final;
      }
    }
    return salesObj;
  }
//here are the two objects, made by the functions calculateSales and calculateSales Tax
  var salesObject = calculateSales(companySalesData);
  var taxObject = calculateSalesTax(companySalesData, salesTaxRates);

//final object
  var companies = {};
  for (var h = 0; h < companySalesData.length; h++) {
    if (!companies.hasOwnProperty(companySalesData[h]).name) {
      companies[companySalesData[h].name] = {totalSales: salesObject[companySalesData[h].name], totalTaxes: taxObject[companySalesData[h].name]};
    }
  }
  return companies;
}

console.log(salesTaxReport(companySalesData, salesTaxRates));