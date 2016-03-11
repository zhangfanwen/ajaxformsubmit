<?php

// 修改用户名
if (isset($_POST['username'])) {
    //TODO update db
    retok(array('username'=>$_POST['username']));
}

function retok($data='', $msg='', $url='') {
    $result = array();
    $result['jsonp'] = '';
    $result['result'] = 0;
    $result['msg'] = $msg; // 在客户端弹出提示框
    $result['data'] = $data; // 返回的数据
    $result['url'] = $url; // 重定向的URL

    echo json_encode_ex($result);   
    exit;
}

function json_encode_ex( $value) 
{ 
    if ( version_compare( PHP_VERSION,'5.4.0','<')) { 
		$str = json_encode( $value); 
		$str =  preg_replace_callback( 
		                        "#\\\u([0-9a-f]{4})#i", 
		                         function( $matchs) 
		                        { 
		                              return  iconv('UCS-2BE', 'UTF-8',  pack('H4',  $matchs[1])); 
		                        }, 
		                          $str 
		                        ); 
         return  $str; 
    } else { 
        return json_encode( $value, JSON_UNESCAPED_UNICODE); 
    } 
}