package com.cez.study.router;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import ro.isdc.wro.model.resource.support.naming.TimestampNamingStrategy;

import com.cez.study.utils.DateUtil;

public class DailyNamingStrategy extends TimestampNamingStrategy {

 protected final Logger log = LoggerFactory.getLogger(DailyNamingStrategy.class);

 @Override
 protected long getTimestamp() {
	 
  String curTime = DateUtil.getCurrentTime();
  return Long.valueOf(curTime);
 }

}