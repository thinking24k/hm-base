/**   
* @Title: JsonTimestampFormater.java 
* @Package com.calabar.util 
* @Description: TODO
* @author xuefeng.gao
* @date 2014-11-24 
* @version V1.0   
*/ 


package com.xxwl.tk.framework.json;

import java.io.IOException;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;

/** 
 * @ClassName: JsonTimestampFormater 
 * @Description: TODO
 * @company 
 * @author x
 * @Email x
 * @date x 
 *  
 */
public class JsonTimestampSerializer extends JsonSerializer<Timestamp> {  
    private final SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");  
    @Override  
    public void serialize(Timestamp value, JsonGenerator jgen,  
            SerializerProvider sp) throws IOException,  
            JsonProcessingException {
    	if(value!=null){
    		 jgen.writeString(sdf.format(value));  
    	}
       
    }  
  
}
