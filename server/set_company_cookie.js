var company_name = process.env.COMPANY_NAME;

module.exports = function (res) {
    // console.info(res);

    res.setHeader("Set-Cookie", 'company_name='+company_name+'; path=/');
};