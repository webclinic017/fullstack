var oModelRegular = require('./modelRegular');
module.exports = function(regular_id){
	var product = oModelRegular.getProduct(regular_id);
	var m_profit_rate_last = product.profit_rate_last || '-';
	var m_detail_appoint_time = oModelRegular.getAppointTime(product);
	var m_status = oModelRegular.judgeStatus(product);
	var m_max_desc = oModelRegular.getMaxDesc(product);
    var m_countdown_time = oModelRegular.getAppointCountdownTime(product);
	return {
		id : product.id,
		name : product.name,
		expect_year_profit : product.profit_rate_wish,
		team : product.team_intro,
		money_copy : product.money_copy,
        money_copy_low : product.money_copy_low,
        money_copy_high : product.money_copy_high,          
        money_copy_max: product.money_copy_max,
		period : product.period,
        progress: product.progress,
		withdraw_history : product.withdraw_history,
		profit_rate_last : m_profit_rate_last,
		detail_appoint_time : m_detail_appoint_time,
		profit_rate_now : product.profit_rate_now,
		status : m_status,
		max_desc : m_max_desc,
		progress : product.progress,
		trade_time : oModelRegular.getTradeTime(product),
		desc_risk : product.desc_risk,
		desc_divide : product.desc_divide,
		note : product.note,
        countdownInfo: m_countdown_time
	};
};