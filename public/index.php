<?php

require  __DIR__ . '/../vendor/autoload.php';


use Ferdev\FeriPortofolio\App\Router;
use Ferdev\FeriPortofolio\Controller\HomeController;

Router::add('GET', '/', HomeController::class, 'index');


Router::run();
