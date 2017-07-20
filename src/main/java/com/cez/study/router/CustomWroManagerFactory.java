package com.cez.study.router;

import ro.isdc.wro.manager.factory.standalone.DefaultStandaloneContextAwareManagerFactory;

/**
 * wro.xml 压缩文件的命名策略
 * @author zona
 * 2017年7月20日 下午4:38:39
 */
public class CustomWroManagerFactory extends DefaultStandaloneContextAwareManagerFactory {
	
	public CustomWroManagerFactory() {
		
		this.setNamingStrategy(new DailyNamingStrategy());
	}
}