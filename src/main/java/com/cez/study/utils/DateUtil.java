package com.cez.study.utils;

import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * @desc: 
 * @auth: zona
 * @createTime: 2017年7月20日 下午4:20:32
 */
public class DateUtil {

	/** yyyyMMddHHmmss */
	private static final String PATTERN_DEFAULT = "yyyyMMddHHmmss";
	
	public static String getCurrentTime() {
		return new SimpleDateFormat(PATTERN_DEFAULT).format(new Date());
	}
}
