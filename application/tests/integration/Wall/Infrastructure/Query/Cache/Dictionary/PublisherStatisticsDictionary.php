<?php

declare(strict_types=1);

namespace tests\integration\Wall\Infrastructure\Query\Cache\Dictionary;

use DI\Container;

trait PublisherStatisticsDictionary
{
    abstract protected function container(): Container;
}
