<?php

declare(strict_types=1);

namespace tests\integration\Wall\Application\Subscriber;

use Ramsey\Uuid\Uuid;
use Wall\Application\Query\ClientStatisticsQuery;
use Wall\Application\Query\Result\ClientStatistics;
use Wall\Model\PostWasPublished;

class UpdateClientStatisticsWhenPostWasPublishedTest extends SubscriberTestCase
{
    /** @test */
    public function it_calls_projector_when_post_was_published()
    {
        $this->markTestIncomplete();

        $this->handle(new PostWasPublished(Uuid::uuid4(), 'john@doe.com', 'Lorem ipsum.', new \DateTime()));

        $this->assertThatClientStatisticsProjectorWasCalled();
    }

    private function assertThatClientStatisticsProjectorWasCalled()
    {
        $statistics = $this->container()->get(ClientStatisticsQuery::class)->get();

        $this->assertInstanceOf(ClientStatistics::class, $statistics);
        $this->assertNotNull($statistics->mostOftenUsedBrowser);
    }
}
