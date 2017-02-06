<?php
/**
 * Created by Iride Staff.
 * User: Daniele
 * Date: 06/06/16
 * Time: 11:02
 */

require_once __DIR__."/../vendor/autoload.php";
include(__DIR__."/../vendor/irideweb/mini-fw-core/functions.php");
spl_autoload_register("iwautoload");

\IrideWeb\Core\IWCommand::run(CommandLine::parseArgs($_SERVER['argv']));