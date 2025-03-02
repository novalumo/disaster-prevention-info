import Heading from '@/components/ui/Heading';
import { MapPinIcon, PhoneIcon, ClockIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { cn } from '@/lib/cn';
import { supportFacilities } from '../data/support-facilities';
import OfunatoContainer from '../components/OfunatoContainer';
import { format } from 'date-fns';

function getCapacityStatus(current: number, max: number) {
  const percentage = (current / max) * 100;

  if (percentage >= 90) {
    return {
      label: '混雑',
      color: 'red',
    };
  }

  if (percentage >= 70) {
    return {
      label: 'やや混雑',
      color: 'yellow',
    };
  }

  return {
    label: '空きあり',
    color: 'green',
  };
}

export default function SupportFacilitiesCard() {
  // 施設タイプごとにグループ化
  const groupedFacilities = supportFacilities.reduce(
    (acc, facility) => {
      if (!acc[facility.type]) {
        acc[facility.type] = [];
      }
      acc[facility.type].push(facility);
      return acc;
    },
    {} as Record<string, typeof supportFacilities>,
  );

  return (
    <OfunatoContainer>
      <Heading as="h2" color="primary" className="mb-4">
        避難者支援施設
      </Heading>
      <div className="space-y-6">
        {Object.entries(groupedFacilities).map(([type, facilities]) => (
          <div key={type} className="space-y-2">
            <h3 className="font-bold text-gray-700 text-lg border-b pb-1">
              {type}
            </h3>
            <div className="space-y-3">
              {facilities.map((facility) => (
                <div
                  key={facility.id}
                  className="bg-white p-4 rounded border border-gray-100"
                >
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-grow">
                      <div className="font-bold text-gray-800 text-lg mb-2">
                        {facility.name}
                      </div>

                      <div className="text-gray-600 space-y-2">
                        {facility.address && (
                          <div className="flex items-center gap-2">
                            <MapPinIcon className="h-5 w-5 flex-shrink-0" />
                            <span>{facility.address}</span>
                          </div>
                        )}

                        {facility.phone && (
                          <div className="flex items-center gap-2">
                            <PhoneIcon className="h-5 w-5 flex-shrink-0" />
                            <span>{facility.phone}</span>
                          </div>
                        )}

                        {facility.hours && facility.hours.length > 0 && (
                          <div className="flex items-start gap-2">
                            <ClockIcon className="h-5 w-5 flex-shrink-0 mt-0.5" />
                            <div className="space-y-1">
                              {facility.hours.map((hour, index) => (
                                <div
                                  key={`${facility.id}-hour-${index}`}
                                  className={cn('text-gray-600')}
                                >
                                  {hour}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {facility.details && (
                        <div className="mt-3 text-gray-600">
                          {facility.details}
                        </div>
                      )}

                      {facility.schedule && (
                        <div className="mt-3">
                          <div className="font-medium text-gray-700 mb-1">
                            運行スケジュール
                          </div>
                          {facility.schedule.map((s, index) => (
                            <div
                              key={`${facility.id}-schedule-${index}`}
                              className="bg-gray-50 p-3 rounded text-sm"
                            >
                              <div className="font-medium text-gray-700">
                                {format(new Date(s.date), 'yyyy年MM月dd日')}
                                {' - '}
                                {s.time}
                              </div>
                              {s.route && (
                                <div className="mt-2 space-y-1">
                                  {s.route.map((stop, idx) => (
                                    <div
                                      key={`${facility.id}-route-${idx}`}
                                      className="flex items-center gap-2"
                                    >
                                      <span className="text-blue-600">●</span>
                                      {stop}
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}

                      {facility.notes && facility.notes.length > 0 && (
                        <div className="mt-3 space-y-1">
                          {facility.notes.map((note, index) => (
                            <div
                              key={`${facility.id}-note-${index}`}
                              className="text-sm text-gray-500 flex items-start gap-1"
                            >
                              <span>※</span>
                              <span>{note}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {facility.capacity && facility.currentUsers && (
                        <div className="mt-3 flex items-center gap-2">
                          <span className="text-gray-600 text-sm">
                            現在の利用状況: {facility.currentUsers}人 /{' '}
                            {facility.capacity}人
                          </span>
                          <span
                            className={cn(
                              'px-2 py-0.5 rounded text-xs font-medium',
                              {
                                'bg-red-100 text-red-700':
                                  getCapacityStatus(
                                    facility.currentUsers,
                                    facility.capacity,
                                  ).color === 'red',
                                'bg-yellow-100 text-yellow-700':
                                  getCapacityStatus(
                                    facility.currentUsers,
                                    facility.capacity,
                                  ).color === 'yellow',
                                'bg-green-100 text-green-700':
                                  getCapacityStatus(
                                    facility.currentUsers,
                                    facility.capacity,
                                  ).color === 'green',
                              },
                            )}
                          >
                            {
                              getCapacityStatus(
                                facility.currentUsers,
                                facility.capacity,
                              ).label
                            }
                          </span>
                        </div>
                      )}
                    </div>

                    {facility.mapUrl && (
                      <Link
                        href={facility.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 text-blue-600 hover:text-blue-700 transition-colors text-center"
                        title="地図で見る"
                      >
                        <MapPinIcon className="h-6 w-6 mx-auto" />
                        <span className="text-xs mt-1 block">地図</span>
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </OfunatoContainer>
  );
}
