<?php
/**
 * Created by Iride Staff.
 * User: Daniele
 * Date: 19/01/17
 * Time: 11:24
 */
if (isset($_SERVER['HTTP_CLIENT_IP'])
    || isset($_SERVER['HTTP_X_FORWARDED_FOR'])
    || !(in_array(@$_SERVER['REMOTE_ADDR'], ['127.0.0.1', '::1']) || php_sapi_name() === 'cli-server')
) {
    header('HTTP/1.0 403 Forbidden');
    exit('You are not allowed to access this file. Check '.basename(__FILE__).' for more information.');
}

require_once "../vendor/autoload.php";
include("../vendor/irideweb/mini-fw-core/functions.php");
spl_autoload_register("iwautoload");

$kernel = \IrideWeb\Core\IWKernel::factory();
$kernel->dispatch("dev");