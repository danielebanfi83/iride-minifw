<?php
/**
 * Created by Iride Staff.
 * User: Daniele
 * Date: 06/06/16
 * Time: 11:02
 */

include(__DIR__."/../vendor/irideweb/mini-fw-core/functions.php");
spl_autoload_register("iwautoload");
require_once __DIR__."/../vendor/autoload.php";

\IrideWeb\Core\IWCommand::run(CommandLine::parseArgs($_SERVER['argv']));