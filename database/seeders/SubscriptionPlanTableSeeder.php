<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\SubscriptionPlan;

class SubscriptionPlanTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $SubscriptionPlans = [
            [
                'name' => 'Basic',
                'price' => 200000,
                'active_period_in_months' => 3,
                'features' => json_encode(['features1', 'feature2'])
            ],
            [
                'name' => 'Premium',
                'price' => 900000,
                'active_period_in_months' => 6,
                'features' => json_encode(['features1', 'feature2', 'features3', 'feature4'])
            ]
        ];

        SubscriptionPlan::insert($SubscriptionPlans);
    }
}
