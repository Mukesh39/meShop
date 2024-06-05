import React from "react";

function Stats() {
  return (
    <div className="name">
      <div class="bg-white py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            <div class="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt class="text-base leading-7 text-gray-600">
                Transactions every 24 hours
              </dt>
              <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                10 million
              </dd>
            </div>
            <div class="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt class="text-base leading-7 text-gray-600">
                Every Month Sales and Bumpers
              </dt>
              <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                $1000
              </dd>
            </div>
            <div class="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt class="text-base leading-7 text-gray-600">
                New users annually
              </dt>
              <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                46,000
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}

export default Stats;
