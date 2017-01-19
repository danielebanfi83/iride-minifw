<?php
/**
 * Created by Iride Staff.
 * User: Daniele
 * Date: 01/06/16
 * Time: 12:53
 */

include("../vendor/irideweb/mini-fw-core/functions.php");
spl_autoload_register("iwautoload");
require_once "../vendor/autoload.php";

$kernel = \IrideWeb\Core\IWKernel::factory();
$kernel->dispatch("prod");