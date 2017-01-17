package com.xxwl.tk.framework.utils;

import java.lang.reflect.Method;
import java.util.HashMap;
import java.util.Map;

public class MapUtil {
	
	@SuppressWarnings("unchecked")
	public static Map<String, Object> objToMap(Object thisObj){
		Map<String, Object> map = new HashMap<String, Object> ();
		if(null == thisObj){
			return map;
		}else if(thisObj instanceof Map){
			return (Map<String, Object>) thisObj;
		}
	    try {  
	      Class c = Class.forName(thisObj.getClass().getName());  
	      Method[] m = c.getMethods();  
	      for (int i = 0; i < m.length; i++) {  
	        String method = m[i].getName();  
	        if (method.startsWith("get") && !"getClass".equals(method)) {  
	          try{  
	        	  Object value = m[i].invoke(thisObj);  
		          if (value != null) {  
		            String key=method.substring(3);  
		            key=key.substring(0,1).toLowerCase()+key.substring(1);  
		            map.put(key, value);  
		          }  
	          }catch (Exception e) {  
	        	  e.printStackTrace(); 
	          }  
	        }  
	      }  
	    }  
	    catch (Exception e) {  
	      e.printStackTrace();  
	    }  
	    return map;  
	  }  
}
