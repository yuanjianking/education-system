<?php 

if(!pdo_fieldexists("yz_goods_dispatch", "dispatch_type_ids")) {
 pdo_query("ALTER TABLE " . tablename('yz_goods_dispatch') . " ADD `dispatch_type_ids` INT(11) DEFAULT NULL;");
}
 ?>