import PropTypes from "prop-types";
import { StatisticsSection, Title, StatisticsCatalogue, StatsItem } from "./Statistics.styled";

export const Statistics = ({title, stats}) => {
    return <StatisticsSection>
              <Title>{title}</Title>
              <StatisticsCatalogue>
                  {stats.map(item => (
                      <StatsItem key={item.id}>
                          <span>{item.label}</span>
                          <span>{item.percentage}%</span>
                      </StatsItem>
                  ))}
              </StatisticsCatalogue>

            </StatisticsSection>
}
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired
    })
  )
}