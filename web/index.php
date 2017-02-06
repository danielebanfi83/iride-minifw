<?php
/**
 * Created by Iride Staff.
 * User: Daniele
 * Date: 01/06/16
 * Time: 12:53
 */

require_once "../vendor/autoload.php";
include("../vendor/irideweb/mini-fw-core/functions.php");
spl_autoload_register("iwautoload");

$kernel = \IrideWeb\Core\IWKernel::factory();
$kernel->dispatch("prod");